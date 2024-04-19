import instance from "./axios";

const AddUser = async (user) => {
  await instance.post("/users/create_user", user);
};
const LoginUser = async (user) => {
  let res = await instance.post("/users/user_login", user);
  return res;
};
const LogoutUser = async () => {
  await instance.post("/logout");
};

const GetUsers = async () => {
  let response = await instance.get("/users/get_all_users");
  return response.data;
};

const GetTotalUsers = async () => {
  let response = await instance.get("/users/get_total_users");
  return response.data;
};

const GetTotalOrders = async () => {
  let response = await instance.get("/users/get_total_orders");
  return response.data;
};

const GetOrders = async () => {
  let response = await instance.get("/users/get_all_orders");
  return response.data;
};

const ApproveORderById = async (id) => {
  try {
    let bearer = `Bearer ${localStorage.getItem("token")}`;
    if (bearer) {
      let response = await instance.put(`/users/approve_order/${id}`, null, {
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
      });
      return response;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

const AddOrder = async (order) => {
  try {
    let token = `Bearer ${localStorage.getItem("token")}`;
    if (token) {
      let res = await instance.post("/users/create_order", order, {
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });
      return res;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

const GetCurrentUser = async () => {
  try {
    let currentUserToken = `Bearer ${localStorage.getItem("token")}`;
    console.log("here");
    console.log(currentUserToken);
    if (currentUserToken) {
      let response = await instance.get("/users/current_user", {
        headers: {
          Authorization: currentUserToken,
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } else {
      return;
    }
  } catch (error) {
    console.log(error);
  }
};

const ResetPassword = async (user) => {
  let response = await instance.put("/users/reset_password", user);
  return response;
};

export {
  AddUser,
  LoginUser,
  LogoutUser,
  GetUsers,
  GetTotalUsers,
  GetTotalOrders,
  GetOrders,
  ApproveORderById,
  AddOrder,
  GetCurrentUser,
  ResetPassword,
};
