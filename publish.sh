#!/bin/bash

# Stop script on first error
set -e

# --- CONFIGURATION ---
ORIGINAL_NAME="lipic-js"
SCOPED_NAME="@ranjeet-h/lipic-js"
GITHUB_REGISTRY="https://npm.pkg.github.com"

# --- CLEANUP FUNCTION ---
# Ensures package.json always goes back to 'lipic-js'
cleanup() {
  CURRENT_NAME=$(node -p "require('./package.json').name")
  if [ "$CURRENT_NAME" != "$ORIGINAL_NAME" ]; then
      echo ""
      echo "🔄 Restoring package name to '$ORIGINAL_NAME'..."
      npm pkg set name=$ORIGINAL_NAME
      echo "✅ Restore complete."
  fi
}
trap cleanup EXIT

echo "=========================================="
echo "🚀 NPM & GITHUB PUBLISHER"
echo "=========================================="

# 1. SHOW CURRENT & ASK FOR NEW
CURRENT_VERSION=$(node -p "require('./package.json').version")
echo "📌 Current Version: $CURRENT_VERSION"
echo ""
read -p "Enter new version (e.g., 1.0.1): " INPUT_VERSION

if [ -z "$INPUT_VERSION" ]; then
  echo "❌ No version entered. Exiting."
  exit 1
fi

# Apply the version change
npm version $INPUT_VERSION

# 2. LOGIN CHECKS (Silent)
echo ""
echo "🔍 Checking logins..."
npm whoami > /dev/null 2>&1 || npm login
npm whoami --registry=$GITHUB_REGISTRY > /dev/null 2>&1 || npm login --scope=@ranjeet-h --registry=$GITHUB_REGISTRY

# 3. PUBLISH TO NPM (Unscoped)
echo ""
echo "📦 Publishing '$ORIGINAL_NAME' to npm..."
npm pkg set name=$ORIGINAL_NAME
npm publish --access public

# 4. PUBLISH TO GITHUB (Scoped)
echo ""
echo "📦 Publishing '$SCOPED_NAME' to GitHub..."
npm pkg set name=$SCOPED_NAME
npm publish --registry=$GITHUB_REGISTRY

echo ""
echo "🎉 SUCCESS! Version $INPUT_VERSION is live."