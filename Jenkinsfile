pipeline {
    agent any

    environment {
        VERCEL_HOOK = credentials('vercel-deploy-hook')
    }

    stages {
        stage('Install') {
            steps { sh 'npm install' }
        }
        stage('Build') {
            steps { sh 'npm run build' }
        }
        stage('Deploy') {
            steps { sh 'curl -fsS -X POST "$VERCEL_HOOK"' }
        }
    }
}
