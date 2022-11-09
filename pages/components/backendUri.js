const URI = "http://65.2.73.17:8080";

const postData = async (path, data) => {
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
const getData = async (path) => {
  const token =  localStorage.getItem('token')
  const response = await fetch(`${URI}${path}`, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": token|| "",
    },
  });
  return response.json();
};
const updateData = async (path, data) => {
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
const deleteData = async (path) => {
  const token =  localStorage.getItem('token')
  const response = await fetch(`${URI}${path}`, {
    method: "DELETE",
    headers: {
      "Authorization": token || "",
    }
  });
  return response.json();
};
export  {
  postData,
  getData,
  updateData,
  deleteData,
};
