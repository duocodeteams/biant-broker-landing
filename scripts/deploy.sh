#!/usr/bin/env bash
set -euo pipefail

if [[ -f ".env.deploy" ]]; then
  # shellcheck disable=SC1091
  source ".env.deploy"
fi

: "${DEPLOY_HOST:?Falta DEPLOY_HOST en .env.deploy o variables de entorno}"
: "${DEPLOY_USER:?Falta DEPLOY_USER en .env.deploy o variables de entorno}"

DEPLOY_PORT="${DEPLOY_PORT:-22}"
DEPLOY_TARGET="${DEPLOY_TARGET:-public_html}"

if [[ ! -d "out" ]]; then
  echo "No existe la carpeta out. Ejecuta npm run build primero."
  exit 1
fi

REMOTE="${DEPLOY_USER}@${DEPLOY_HOST}"

if command -v rsync >/dev/null 2>&1; then
  echo "Subiendo out/ a ${REMOTE}:${DEPLOY_TARGET}/ con rsync..."
  rsync -az --delete -e "ssh -p ${DEPLOY_PORT}" out/ "${REMOTE}:${DEPLOY_TARGET}/"
else
  echo "rsync no está instalado. Usando scp (sin --delete)..."
  scp -P "${DEPLOY_PORT}" -r out/* "${REMOTE}:${DEPLOY_TARGET}/"
fi

echo "Deploy completado."
