import axios from 'axios'

const API_URL = "https://resume-backend-david.herokuapp.com/"

class Service {
    getSkills() {
        return axios.get(API_URL+'skill/');
 
      }
      getSkill(data) {
        return
      }
    
      getEducations() {
        return  axios.get(API_URL+'education/')
      }

      getExperiences() {
        return axios.get(API_URL+'experience/')
      }
      getExperience(data) {
        return 
      }
      

      getProjects() {
        return axios.get(API_URL+'project/')
      }
      getProject(data) {
        return 
      }
      
      getAwards() {
        return axios.get(API_URL+'award/')
      }
      getAward() {
        return
      }
      postMessage(data) {
       return axios.post(API_URL, data)
      }
  
}

export default new Service()