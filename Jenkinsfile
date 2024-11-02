pipeline {
    agent any
    stages {
        
        stage('Test') {
            agent {
                docker {
                    image 'node:22.11.0-alpine3.20'
                    args '-u root'
                    reuseNode true // Reuse the node for the next stages
                }
            }
            steps {
                sh '''
                    npx playwright test

                '''
            }
        }
        
    }
}