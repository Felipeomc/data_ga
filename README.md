# TeamPlus: A Tool for Optimizing Software Development Team Formation using Genetic Algorithms

This repository contains the codebase for the TeamPlus tool, developed as part of the research. Also contains supplementary materials (Threats to Validity and Illustrative example).

## Repository Structure

This repository is organized into the following folders:

- **src/**: Contains all the project source code, including:
  - **genetic_algorithms/**: Subfolder with the genetic algorithms used in the comparative study.
  - **Datasets/**: Subfolder containing the datasets used in the experiments.
  - **web-app/**: Subfolder with the implementation of the web application.

## Supplementary Materials

Due to page limitations, we are providing two PDF files as supplementary materials:

- **Threats_to_Validity_Supplementary_Material.pdf**: Contains an analysis of the threats to the validity of the study.
- **Illustrative_example_Supplementary_Material.pdf**: Provides an illustrative example of using the tool by software project managers.

These materials can be accessed directly from the repository to complement the understanding of the tool and the results presented.

## Instructions to Run the TeamPlus Tool

To ensure that the installation and execution of the TeamPlus tool occur smoothly, follow the detailed steps below:

### 1. Clone the Repository

First, you need to clone the repository where the tool's source code is hosted. In the terminal, run the following command:


git clone https://github.com/Felipeomc/data_ga/
This will create a local copy of the repository on your system.

### 2. Install Visual Studio Code

Ensure that **Visual Studio Code (VS Code)** is installed on your system. If you haven't installed it yet, you can download and install it from the official website:

- [Download Visual Studio Code](https://code.visualstudio.com/)

### 3. Install Node.js and NPM
To run the application, you need to have Node.js and the npm package manager installed. Download and install the latest version of Node.js, which includes npm:

Download Node.js

### 4. Install Dependencies
After installing Node.js, navigate to the cloned project directory. In the VS Code terminal (or any terminal of your choice), go to the web-app folder:

```bash
cd src/web-app 
```

Now, install all the necessary dependencies for the application by running the command:

```bash
npm install
```
This command will read the package.json file and install all the libraries and modules required for the application to function.

Before running the project, ensure you have:

->Node.js installed

->NPM or Yarn for package management

->A .env file with database credentials

### 5. MongoDB Database Setup
Before starting the server, ensure that MongoDB is installed and configured on your environment. If necessary, install MongoDB from the official website:

Download MongoDB
After installation, start the MongoDB service. Make sure the necessary database for the project is loaded, containing the historical project data. If you need a data dump, check the supplementary documentation or contact the author.

### 6. .env File Configuration
In the web-app directory, create a .env file to store the environment variables needed for the application setup, including the MongoDB connection URL and other configurations specific to the project management system API.

The application uses MongoDB Atlas. Ensure you set up a .env file at the root of the project with the correct credentials:

DB_USER=your_username
DB_PASSWORD=your_password

The database connection is defined in db.js, where the data models are structured using Mongoose.

### 7. Run the Application
Now you can start the application locally. In the VS Code terminal, still in the web-app folder, run:

```bash
npm start
```
This will start the backend server of the application.

### 8. Access the Tool in the Browser
With the server running, open your preferred browser and access the following URL to view the tool:

```bash
http://localhost:3000/projeto2
```

### 9. Project Structure (**web-app/** Subfolder)

The web-ap directory contains the implementation of the web application for team formation based on a genetic algorithm. The tool connects to MongoDB Atlas, using environment variables for authentication.

In this interface, you will be able to explore all the functionalities of TeamPlus and navigate through the different pages of the application.

The main files required to run the application are:

package.json → Manages dependencies and scripts.

db.js → Connects to MongoDB Atlas and defines data models.

routes/ → Defines API routes.

views/ → Contains the application's views.

public/ → Static files (CSS, JS, images).

.env → Environment variables file (not included in the repository for security reasons).

### 10. Auxiliary Data (**web-app/** Subfolder)

Some JSON files store data extracted from online databases for displaying profiles and running tests, but they are not essential for running the application.

# How to Cite This Repository
If you use the code from this repository, please cite the following reference:

```bibtex
@software{
  title = {TeamPlus: A Tool for Optimizing Software Development Team Formation using Genetic Algorithms},
  author = {Cunha, Felipe; Perkusich, Mirko; Albuquerque, Danyllo; Gorgônio, Kyller; Almeida, Hyggo; Perkusich, Angelo},
  url = {https://github.com/Felipeomc/data_ga/},
  version = {1.0},
  year = {2025},
}
```
# License
This project is licensed under the GNU General Public License v3.0. You can find the full text of the license in the LICENSE file in this repository.
