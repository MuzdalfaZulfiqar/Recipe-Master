import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import React from 'react';
import AddRecipe from './AddRecipe';
import ManageRecipes from './ManageRecipes';

function AdminDashboards() {

  let [show, setShow] = React.useState(false)
  let [showManage, setShowManage] = React.useState(false)
  let [showAdmin, setShowAdmin] = React.useState(true)

  function handleAddItem(){
    setShowManage(false)
    setShow(true)
    setShowAdmin(false)
  }
  function handleManageItem(){
    setShow(false)
    setShowManage(true)
    setShowAdmin(false)
  }
  return (
    <div className="sidebar-container">
       
      <Sidebar backgroundColor = {"#f8c611"} width = {"20vw"}>
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: 'black',
                color: 'white',
              },
            },
          }}
        >
           <div className="sidebarTitle">Recipe Master</div>
          <MenuItem  
          onClick={handleAddItem}
          className='menuItem'
          // component={<Link to="/addRecipe" />}
          >Add recipe</MenuItem>
          <MenuItem
          onClick={handleManageItem}
           className='menuItem'
          // component={<Link to="/calendar" />}
          >Manage Recipes</MenuItem>
        </Menu>
      </Sidebar>
      <div 
        style={{width:"80vw", height :"100vh", overflowY :"scroll"
      }}
      >
        {showAdmin && 
         <ManageRecipes/>
        }
        
        {
          show && 
          <AddRecipe/>
        }
        {
          showManage && 
          <ManageRecipes/>
        }
      </div>    

    </div>
  );
}

export default AdminDashboards;