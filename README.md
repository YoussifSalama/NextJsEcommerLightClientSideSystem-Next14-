### 🚀 **E-commerce App Built with Next.js, Formik, ShadCN, and More**

This project is an **e-commerce application** built using modern web technologies like **Next.js**, **Formik**, **ShadCN**, **Toasting**, and simulating a **file system database**. The app is designed to provide a smooth and intuitive user experience for an online store.

---

### 🛠️ **Technologies Used**

* **[Next.js](https://nextjs.org)** – A React framework for building scalable and fast web applications.
* **[Formik](https://formik.org)** – A library for handling forms in React, simplifying validation and form state management.
* **[ShadCN UI](https://github.com/shadcn/ui)** – A UI component library for faster design and development.
* **[Toasting](https://github.com/Nozbe/ReactNativeToasts)** – For showing toast notifications (e.g., item added to cart).
* **File System Database Simulation** – A simulated database using the file system to store product data and user information.

---

### 💻 **Getting Started**

Clone this repository and install the necessary dependencies:

```bash
git clone https://github.com/YoussifSalama/NextJsEcommerLightClientSideSystem-Next14-.git
cd *
npm install
```

---

### 🚀 **Run the Development Server**

To run the app locally, use:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) to access the app.

---

### 🛒 **Features**

This e-commerce application includes a variety of features to enhance the shopping experience:

* **Add to Cart** 🛍️
  Users can add items to their shopping cart and view them in a responsive cart UI.

* **Order Management** 📦
  Complete order checkout functionality with simple simulation of order data.

* **Categories & Product Pages** 📑
  Browse products by category with dynamic product listings.

* **Dynamic Product Pages** 🔍
  Detailed product pages with dynamic routing and product information.

* **Toast Notifications** 🎉
  Toast messages are shown to confirm actions like adding items to the cart.

---

### ⚙️ **Folder Structure**

The app is well-structured to help developers quickly navigate and scale:

```
/pages
    /cart.js          # Cart page
    /checkout.js      # Checkout page
    /categories.js    # Categories page
    /products/[id].js # Dynamic product page
/app
    /components       # Shared UI components (e.g., Header, Footer)
    /hooks            # Custom hooks like useCart and useToast
    /context          # Global state management (e.g., CartContext)
    /utils            # Utility functions for the app
    /styles           # Global CSS
/data
    /products.json    # Simulated product database (file system)
```

---

### 🧑‍💻 **Learning More**

If you're new to any of the technologies used, check out the resources below:

* **[Next.js Documentation](https://nextjs.org/docs)**
* **[Formik Documentation](https://formik.org/docs)**
* **[ShadCN UI](https://github.com/shadcn/ui)**
* **[Toasting Docs](https://github.com/Nozbe/ReactNativeToasts)**

---

### 🌐 **Deployment**

To deploy your app, use **Vercel** (the easiest platform for deploying Next.js apps).

1. Push your code to GitHub.
2. Go to [Vercel](https://vercel.com).
3. Connect your GitHub repository.
4. Click **Deploy** and let Vercel handle the deployment.

---

### 🔗 **Icons & Visuals**

#### 📦 **Add to Cart** Icon

* Cart icon to represent adding products to the cart.

#### 🛒 **Categories Page** Icon

* Category icons for easy navigation through different product types.

#### 🎉 **Toast Notification** Icon

* A small "check" icon in the toast to confirm successful actions like adding items to the cart.

---

### 📝 **License**

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.

---

### 🚀 **Contributions**

Feel free to fork, clone, and contribute to this project. Pull requests are welcome!
