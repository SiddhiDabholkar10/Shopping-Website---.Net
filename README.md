
# Shopping Website - .Net



## Overview
This repository contains a comprehensive shopping website developed using the .NET framework for the backend and Angular for the frontend. The application allows users to browse products, add them to the cart, place orders, and manage user profiles. Retailers can manage their products and view orders from customers.

## Technologies Used
- **Backend:** .NET Core, Entity Framework Core
- **Frontend:** Angular, TypeScript
- **Database:** SQL Server
- **Others:** HTML, CSS, Bootstrap

## Folder Structure
```
Shopping-Website---.Net/
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── IUser.ts
│   │   │   ├── IProduct.ts
│   │   │   ├── IRetailer.ts
│   │   │   ├── ICategory.ts
│   │   │   ├── IWishlist.ts
│   │   │   ├── user.service.ts
│   │   │   ├── app.module.ts
│   │   │   ├── components/ (various Angular components)
│   │   └── assets/ (static assets)
│   ├── README.md (frontend specific documentation)
│   └── ... (other Angular CLI generated files)
│
├── online_shopping-master/
│   ├── OnlineShopping/
│   │   ├── Controllers/
│   │   │   ├── UserController.cs
│   │   │   ├── CartController.cs
│   │   │   ├── OrderController.cs
│   │   │   ├── AdminController.cs
│   │   │   ├── ProductController.cs
│   │   │   ├── WishlistController.cs
│   │   │   ├── RetailerController.cs
│   │   ├── Models/
│   │   │   ├── User.cs
│   │   │   ├── Cart.cs
│   │   │   ├── Product.cs
│   │   │   ├── Order.cs
│   │   │   ├── Category.cs
│   │   │   ├── Retailer.cs
│   │   │   ├── Wishlist.cs
│   └── ... (other ASP.NET Core project files)
│
└── README.md (this file)
```

## Backend Overview
The backend of the application is built using ASP.NET Core. It includes various controllers to handle different functionalities of the application:

- **UserController:** Manages user-related operations such as fetching user details, adding new users, updating user information, and retrieving users by email.
- **CartController:** Handles operations related to the shopping cart, including adding items to the cart, retrieving cart items, and deleting cart items.
- **OrderController:** Manages order-related operations, including placing orders and retrieving order details.
- **AdminController:** Includes functionalities for admin users, such as listing pending retailers, managing retailers, and retrieving products.
- **ProductController:** Handles product-related operations, including retrieving product details, fetching products by category and brand, and updating product count.
- **WishlistController:** Manages wishlist-related operations, including adding items to the wishlist, retrieving wishlist items, and deleting wishlist items.
- **RetailerController:** Manages retailer-related operations, including adding retailers, retrieving retailers, and managing retailer products.

### Models
The backend includes various models to represent the database entities:
- **User:** Represents a user with properties such as UserId, Fname, Lname, Email, Mob, UserAddress, and UserPwd.
- **Cart:** Represents a shopping cart with properties such as CartId, ProductId, Quantity, and UserId.
- **Product:** Represents a product with properties such as ProductId, ProductName, Brand, ProdDesc, Price, CategoryId, CountAvailable, RetId, TotalRatings, and SumRatings.
- **Order:** Represents an order with properties such as OrderId, OrderTimestamp, TotalCost, UserId, Quantity, and ProductId.
- **Category:** Represents a product category with properties such as CategoryId and CategoryName.
- **Retailer:** Represents a retailer with properties such as RetId, RetName, RetEmail, RetMob, RetLoc, RetPwd, and IsAccepted.
- **Wishlist:** Represents a wishlist with properties such as WishlistId, ProductId, and UserId.

## Frontend Overview
The frontend of the application is built using Angular. It includes various components and services to manage the application's user interface and interactions.

### Components
- **HeaderComponent:** Displays the header of the application.
- **FooterComponent:** Displays the footer of the application.
- **HomeComponent:** Displays the homepage of the application.
- **UserProfileComponent:** Manages the user profile.
- **RetailerProfileComponent:** Manages the retailer profile.
- **UserLoginComponent:** Manages user login.
- **UserSignupComponent:** Manages user signup.
- **RetailerRegisterComponent:** Manages retailer registration.
- **AddProductComponent:** Manages adding new products.
- **EditProductComponent:** Manages editing existing products.
- **ProductListComponent:** Displays a list of products.
- **RetailerListComponent:** Displays a list of retailers.
- **RetailerRequestsComponent:** Manages retailer requests.
- **ProductsComponent:** Displays products.
- **CompareComponent:** Compares products.
- **SearchResultsComponent:** Displays search results.
- **MyOrdersComponent:** Displays user orders.
- **WishlistComponent:** Manages the wishlist.
- **UserNewPassComponent:** Manages user password reset.
- **RetailerNewPassComponent:** Manages retailer password reset.
- **CartComponent:** Manages the shopping cart.

### Services
- **UserService:** Manages user-related operations such as adding new users and fetching user details.

## Getting Started

### Prerequisites
- **Backend:** .NET Core SDK, SQL Server
- **Frontend:** Node.js, Angular CLI

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/SiddhiDabholkar10/Shopping-Website---.Net.git
   ```
2. Navigate to the backend project directory and restore the packages:
   ```
   cd online_shopping-master/OnlineShopping
   dotnet restore
   ```
3. Navigate to the frontend directory and install the dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application
1. Start the backend server:
   ```
   cd online_shopping-master/OnlineShopping
   dotnet run
   ```
2. Start the frontend server:
   ```
   cd frontend
   ng serve
   ```
3. Navigate to `http://localhost:4200/` to view the application.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

For more details, refer to the Angular CLI [README.md](frontend/README.md) in the `frontend` directory.
```
