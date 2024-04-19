import { defineStore } from "pinia";
import router from "@/router";
import {
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
} from "../../api/mainaxios";

export const UseuserStore = defineStore("user", {
  state: () => ({
    users: [],
    totalUsers: 0,
    totalOrders: 0,
    orders: [],
    isLoggedIn: false,
    isAdmin: false,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    value: "",
    pieces: "",
    UsersValue: 0,
    OrdersValue: 0,
    CurrentUserName: "",
    snackbar: false,
    timeout: 2000,
    snackbarColor: "",
    items: [
      "Chapatis",
      "Mandazi",
      "cupcakes",
      "Ngumus",
      "Samosa",
      "Cookies",
      "Bites",
      "Cakes",
    ],
    myDate: new Date(),
    hrs: new Date().getHours(),
    dialog: false,
    resetPassDialog: false,
    typeValue: "",
    typeStatus: false,
    displayTextArray: [
      "Cakes",
      "Bites",
      "Cupcakes",
      "Cookies",
      "Chapatis",
      "Ngumus",
    ],
    message: "",
    typingSpeed: 100,
    erasingSpeed: 200,
    newTextDelay: 5000,
    displayTextArrayIndex: 0,
    charIndex: 0,
    model: null,
    // dialog: false,
    cakes: ["Wedding Cakes", "Birthday Cakes", "Anniversary Cakes"],
    itemsCarusel: [
      {
        src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Hello World lorem ipsum dolor sit amet.",
      },
      {
        src: "https://images.unsplash.com/photo-1579697096985-41fe1430e5df?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Hello World lorem ipsum dolor sit amet.",
      },
      {
        src: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Excite your taste buds",
      },
      {
        src: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=2003&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "At a price you can afford",
      },
      {
        src: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Hello World lorem ipsum dolor sit amet.",
      },
      {
        src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Hello World lorem ipsum dolor sit amet45.",
      },
      {
        src: "./src/assets/hero.png",
        caption: "Hello World lorem ipsum dolor sit amet.",
      },
      {
        src: "https://images.unsplash.com/photo-1504400739660-22ebeb14f00a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Hello World lorem ipsum dolor sit amet.",
      },
      {
        src: "https://images.unsplash.com/photo-1601387448308-66ae6aa1f1f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Hello World lorem ipsum dolor sit amet.",
      },
      {
        src: "https://images.unsplash.com/photo-1521471109507-43d61bb345dd?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        caption: "Hello World lorem ipsum dolor sit amet.",
      },
    ],
    headers: [
      {
        text: "Order Type",
        // align: "start",
        // sortable: false,
        value: "order_type",
      },
      { text: "Order Owner", value: "order_owner" },
      { text: "Pieces", value: "pieces" },
      { text: "Id", value: "_id" },
      { text: "User Id", value: "user_id" },
      { text: "Is Aprroved", value: "is_approved" },
      // { text: "Actions", value: "actions", sortable: false },
    ],
    step: 1,
    phoneNumber: "",
    kenyaInputOptions: {
      preferredCountries: ["ke"],
      placeholderNumberType: "MOBILE",
      onlyCountries: ["ke"],
      placeholder: "+254",
    },
    isValidPhoneNumber: true,
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length >= 8 || "Password must be at least 8 characters",
    ],
    showLoginPassword: false,
    showresetLoginPassword: false,
    userNameRules: [
      //no spaces
      (v) => !!v || "Username is required",
      (v) => !/\s/.test(v) || "Username must not contain spaces",
    ],
    accessToken: "",
    targetContactElement: null,
    interval: {},
  }),
  getters: {
    validForm() {
      return (
        this.email != "" &&
        this.password != "" &&
        this.confirmPassword != "" &&
        this.phoneNumber != "" &&
        this.username != "" &&
        this.lastname != "" &&
        this.firstname != ""
      );
    },
    greatingsDependingontheTime() {
      return this.hrs < 12
        ? "Good Morning"
        : this.hrs < 18
        ? "Good Afternoon"
        : "Good Evening";
    },

    headersToDisplay() {
      return this.headers;
    },
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Sign-up";
        case 2:
          return "Login";
        default:
          return "Account created";
      }
    },

    currentIcon() {
      switch (this.step) {
        case 1:
          return "account-plus-outline";
        case 2:
          return "mdi-login";
        default:
          return "Account created";
      }
    },
  },
  actions: {
    openResetDialog() {
      this.resetPassDialog = true;
    },
    async validatePhoneNumber(phoneNumber) {
      // Check if the phone number starts with '+254'
      return phoneNumber.startsWith("+254") && phoneNumber.length > 13;
    },
    async fetchUsers() {
      const users = await GetUsers();
      this.users = users;
    },

    async fetchTotalUsers() {
      const totalusers = await GetTotalUsers();
      this.totalUsers = totalusers;
    },

    async fetchTotalOrders() {
      const totalorders = await GetTotalOrders();
      this.totalOrders = totalorders;
    },

    async fetchOrders() {
      try {
        const res = await GetOrders();

        if (res && res.orders && Array.isArray(res.orders)) {
          this.orders = res.orders
            .map((order) => ({
              ...order,
            }))
            .reverse();
        } else {
          console.error("Received invalid data for orders:", res);
        }
      } catch (error) {
        this.message = "Error fetching orders";
      }
    },

    // Function to decode JWT token
    decodeToken(token) {
      const payload = token.split(".")[1];
      return JSON.parse(atob(payload));
    },
    async addOrder() {
      try {
        let token = localStorage.getItem("token");
        if (!token) {
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const order = {
          order_type: this.value,
          pieces: this.pieces,
        };

        console.log("Adding order:", order, "with headers:", headers);
        await AddOrder(order);

        this.message = "Order added successfully";
        this.snackbarColor = "success";
        this.snackbar = true;
        this.fetchTotalOrders();
        this.fetchOrders();
      } catch (error) {
        if (error) {
          this.message = "expired tokens";
          this.snackbarColor = "red accent-2";
          this.snackbar = true;
        }
      }
    },

    async approveOrderbyID(id) {
      try {
        let token = localStorage.getItem("token");
        if (!token) {
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        };
        console.log(headers);

        await ApproveORderById(id);
        this.message = "Order approved successfully";
        this.snackbarColor = "success";
        this.snackbar = true;
        this.fetchTotalOrders();
        this.fetchOrders();
      } catch (error) {
        console.log(error);
      }
    },

    async registerUser(user) {
      try {
        user = {
          first_name: this.firstname,
          last_name: this.lastname,
          email: this.email,
          password: this.password,
          confirm_password: this.confirmPassword,
          phone: this.phoneNumber,
        };
        await AddUser(user);
        this.message = "Registration successful";
        this.snackbarColor = "success";
        this.snackbar = true;
        // this.step ;
        // router.push("/login");
      } catch (error) {
        if (error.response) {
          this.message = "Email Exist";
          this.snackbarColor = "red accent-2";
          this.snackbar = true;
        }
      }
    },

    clearInputs() {
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      this.firstname = "";
      this.lastname = "";
      this.phoneNumber = "";
    },

    async loginUser(user) {
      try {
        user = {
          email: this.email,
          password: this.password,
        };
        await LoginUser(user).then((res) => {
          this.message = "Login successful";
          this.snackbarColor = "success";
          this.snackbar = true;
          this.isLoggedIn = true;
          this.accessToken = res.data.token.access_token;
          localStorage.setItem("token", this.accessToken);
          router.push("/");
        });
      } catch (error) {
        console.error(error);
        if (error.response) {
          this.message = "error Check your credentials";
          this.snackbarColor = "red accent-2";
          this.snackbar = true;
        }
      }
    },

    async PasswordRest(user) {
      try {
        user = {
          email: this.email,
          password: this.password,
        };
        await ResetPassword(user);
        this.message = "Password Changed successfully";
        this.snackbarColor = "success";
        this.snackbar = true;
      } catch (error) {
        if (error) {
          this.message = "check the provided email";
          this.snackbarColor = "red accent-2";
          this.snackbar = true;
        }
      }
    },
    async logoutUser() {
      await LogoutUser();
      router.push("/login");
    },

    async fetchCurrentUser() {
      try {
        const currentUser = await GetCurrentUser();
        this.CurrentUserName = currentUser.first_name;
      } catch (error) {
        console.log(error);
      }
    },
  },
});
