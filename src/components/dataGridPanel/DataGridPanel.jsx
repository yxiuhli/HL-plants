"use client";
import { useState, useEffect, useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Typography,
  Button,
  Modal,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";
import { deleteProduct } from "@/lib/action";
import { getProducts, addProduct, updateProduct } from "@/lib/action";
import { accessoryCategories, plantCategories } from "@/lib/category";

const DataGridPanel = () => {
  const plantCates = plantCategories;
  const accessoryCates = accessoryCategories;
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(false);
  const [update, setUpdate] = useState(false);
  const [updatingProduct, setUpdatingProduct] = useState({});
  const [selected, setSelected] = useState("plant");

  useEffect(() => {
    try {
      getProducts().then((data) => setProducts(data));
    } catch (err) {
      console.log(err);
    }
  }, [reload]);

  const handleSubmit = () => {
    setReload(!reload);
    setOpen(false);
  };

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "price", headerName: "Price($)", width: 100 },
    { field: "type", headerName: "Type", width: 100 },
    { field: "category", headerName: "Category", width: 100 },
    { field: "desc", headerName: "Description", width: 500 },
    {
      field: "edit",
      headerName: "Edit",
      width: 120,
      renderCell: (param) => {
        return (
          <button
            className="cursor-pointer w-16 h-8 rounded-full bg-teal-700 text-white hover:bg-teal-500"
            onClick={() => {
              setUpdate(true);
              setOpen(true);
              setUpdatingProduct(
                products.find((product) => product._id == param.id)
              );
            }}
          >
            Edit
          </button>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 120,
      renderCell: (param) => {
        return (
          <form action={deleteProduct} onSubmit={handleSubmit}>
            <input type="hidden" name="id" value={param.id} />
            <button className="cursor-pointer w-16 h-8 rounded-full bg-red-700 text-white hover:bg-red-500">
              Delete
            </button>
          </form>
        );
      },
    },
  ];
  const rows = products.map((product) => ({
    id: product._id,
    name: product.name,
    price: product.price,
    type: product.type,
    category: product.category,
    desc: product.desc,
  }));
  return (
    <div className="px-12 flex flex-col gap-8">
      <Typography className="mt-6 ml-2 font-[cursive]" variant="h4">
        Product management
      </Typography>
      <div className="h-[300px] w-full">
        <DataGrid rows={rows} columns={columns} />
      </div>
      <Button
        color="teal"
        onClick={() => {
          setUpdate(false);
          setOpen(true);
        }}
        variant="contained"
        className="max-w-96 self-end"
      >
        Add new product
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white border-solid border-2 shadow-2xl p-4">
          <Typography id="modal-modal-title" variant="h6" component="h2" className="text-center font-semibold">
            {update ? "UPDATE PRODUCT'S DETAIL" : "ADD NEW PRODUCT"}
          </Typography>
          <form
            className="flex flex-col gap-4 mt-4"
            action={update ? updateProduct : addProduct}
            onSubmit={handleSubmit}
          >
            {update && (
              <input type="hidden" name="id" value={updatingProduct._id} />
            )}
            <TextField
              name="name"
              label="Product name"
              variant="standard"
              defaultValue={update ? updatingProduct.name : ""}
            />
            <TextField
              type="text"
              name="img"
              label="Image"
              variant="standard"
              defaultValue={update ? updatingProduct.img : ""}
            />
            <TextField
              name="desc"
              label="Description"
              variant="standard"
              defaultValue={update ? updatingProduct.desc : ""}
            ></TextField>
            <TextField
              select
              name="type"
              label="Product type"
              variant="standard"
              onChange={(e) => {
                e.preventDefault();
                setSelected(e.target.value);
              }}
              defaultValue={update ? updatingProduct.type : "plant"}
            >
              <MenuItem value="plant">Plant</MenuItem>
              <MenuItem value="accessory">Accessory</MenuItem>
            </TextField>
            <TextField
              select
              name="category"
              label="Product Category"
              variant="standard"
              defaultValue={update ? updatingProduct.category : ""}
            >
              {(selected === "plant" ? plantCates : accessoryCates).map(
                (cate) => (
                  <MenuItem value={cate.value}>{cate.name}</MenuItem>
                )
              )}
            </TextField>
            <TextField
              name="price"
              label="Price"
              variant="standard"
              defaultValue={update ? updatingProduct.price : ""}
            />
            <TextField
              name="slug"
              label="Slug"
              variant="standard"
              defaultValue={update ? updatingProduct.slug : ""}
            />
            <Button
              color="teal"
              variant="contained"
              type="submit"
              className="max-w-96 mt-4"
            >
              Save
            </Button>
            <Button color="teal" onClick={() => setOpen(false)}>
              Cancel
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default DataGridPanel;
