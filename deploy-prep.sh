#!/bin/bash
# ==============================================================================
# deploy-prep.sh — Git Initialization & Deployment Script for Nilesh's Portfolio
# ==============================================================================

# Ensure command failures stop execution
set -e

echo -e "\033[0;36m==> Initialising Local Git Repository...\033[0m"
git init

echo -e "\033[0;36m==> Adding all files to commit stage...\033[0m"
git add .

echo -e "\033[0;36m==> Creating initial commit...\033[0m"
git commit -m "Initial commit: Premium Cyber-Security Portfolio"

echo -e "\033[0;36m==> Renaming branch to 'main'...\033[0m"
git branch -M main

# Set remote origin placeholder
REPO_URL="[INSERT REPO URL]"

echo -e "\033[0;33m"
echo "=============================================================================="
echo " STEP REQUIRED: Before pushing, you need to set your GitHub Repository URL.   "
echo " Run the following commands:                                                  "
echo "                                                                              "
echo " 1. git remote add origin <your-github-repo-url>                              "
echo " 2. git push -u origin main                                                   "
echo "=============================================================================="
echo -e "\033[0m"
