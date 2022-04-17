import axios from 'axios';

const baseUrl = 'https://us-central1-nightworld-783a2.cloudfunctions.net';

export function getRequest(apiRoute, bodyParams, isLykanApi) {
  let url;

  if(!isLykanApi) {
    url = baseUrl + apiRoute;
  } else {
    url = apiRoute;
  }

  let params;
  if (!bodyParams) {
    params = null;
  } else {
    params = bodyParams;
  }
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    params
  };

  return axios.get(url, config);
}

export function postRequest(apiRoute, bodyParams) {
  const url = baseUrl + apiRoute;
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  };
  let params;
  if (!bodyParams) {
    params = {};
  } else {
    params = bodyParams;
  }
  return axios.post(url, params, config);
}
