import {BASE_URL,API_INITIAL_URL} from '../config/URLS'

export const fetchDataFromApi = (path,callback) => {
    fetch(`${BASE_URL}${path}`).then(res => res.json()).then(org => 
      callback(org)
    )
  }

export const fetchInitialDataFromApi = (callback) => {
  fetch(`${API_INITIAL_URL}`).then(res => res.json()).then(org => 
      callback(org)
    )
}


  //ipconfig : 192.168.0.255