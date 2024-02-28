@echo off
: Start backend
start cmd /k "cd .\backend & .\venv\Scripts\activate & py .\server.py"
start cmd /k "cd .\frontend & npm install & npm run dev"
start code