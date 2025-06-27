pipeline{
    agent any 

    //escenarios -> escenario -> pasos
    environment{
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }

    stages{
        stage ("saludo a usuario"){
            steps{
                sh 'echo "hola gente"'
                sh 'echo "saliendo del pipeline"'
            }
        }
        stage("salida de saludos"){
            steps{
                sh 'echo "saliendo de este stage"'
            }
        }
        
    }
    stages
    {
        stage("proceso de build y test"){
            agent{
                docker{
                    image 'node:22'
                    reuseNode true
                }
            }
            stages{
                stage ("Instalacion de dependencias"){
                    steps{
                        sh 'npm ci'
                    }
                }
            }
        }

    }
}