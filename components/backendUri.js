const URI = "http://13.233.51.71:8080";

export const postData = async (path, data) => {
  const token =  localStorage.getItem('token')
  const response = await fetch(`${URI}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token || "",
    },
    body: JSON.stringify(data),
  });
  const res=await response.json();
  if(!token){
    localStorage.setItem("token",res.data.token);
  }
  return res;
};
export const getData = async (path) => {
  const token =  localStorage.getItem('token')
  const response = await fetch(`${URI}${path}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": token|| "",
    },
  });
  return response.json();
};
export const updateData = async (path, data) => {
  const token =  localStorage.getItem('token')
  const response = await fetch(`${URI}${path}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token || "",

    },
    body: JSON.stringify(data),
  });
  return response.json();
};
export const deleteData = async (path) => {
  const token =  localStorage.getItem('token')
  const response = await fetch(`${URI}${path}`, {
    method: "DELETE",
    headers: {
      "Authorization": token || "",
    }
  });
  return response.json();
};
