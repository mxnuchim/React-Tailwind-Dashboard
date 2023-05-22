pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/mxnuchim/React-Tailwind-Dashboard', branch: 'main')
      }
    }

    stage('Added Log') {
      parallel {
        stage('Added Log') {
          steps {
            sh 'ls -a'
          }
        }

        stage('Install dependencies') {
          steps {
            sh 'npm i'
          }
        }

      }
    }

  }
}