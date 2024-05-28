"use client";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography, Link, Button, Modal, Box, TextField } from "@mui/material";
import { deleteProduct } from "@/lib/action";
import { getProducts, addProduct, updateProduct } from "@/lib/action";



const DataGridPanel = async () => {
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(false);
  const [update, setUpdate] = useState(false);
  const [updatingProduct, setUpdatingProduct] = useState({});

  useEffect(() => {
    try {
      getProducts().then((data) => setProducts(data));
    } catch (err) {
      console.log(err);
    }
  }, [reload]);

  const columns = [
    { field: "name", headerName: "Tên sản phẩm", width: 250 },
    {
      field: "edit",
      headerName: "Chỉnh sửa",
      width: 120,
      renderCell: (param) => {
        return (
          <Button
            onClick={() => {
              setUpdate(true);
              setOpen(true);
              setUpdatingProduct(
                products.find(
                  (product) => product._id == param.id
                )
              );
            }}
          >
            Edit
          </Button>
        );
      },
    },
    {
      field: "delete",
      headerName: "Xóa",
      width: 120,
      renderCell: (param) => {
        return (<form action={deleteProduct}>
          <input type="hidden" name="id" value={param.id} />
          <button>Delete</button>
        </form>)
      },
    },
  ];
  const rows = products.map((product) => ({
    id: product._id,
    name: product.name,
  }));
  return (
    <div className="px-12 flex flex-col gap-8">
      <Typography className="mt-12 ml-2" variant="h5">
        Quản lý sản phẩm
      </Typography>
      <div className="h-[300px] w-full">
        <DataGrid rows={rows} columns={columns} />
      </div>
      <Button
        onClick={() => {
          setUpdate(false);
          setOpen(true);
        }}
        variant="contained"
        className="max-w-96 self-end"
      >
        Thêm sản phẩm
      </Button>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] bg-white border-solid border-2 shadow-2xl p-4">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {update ? "Cập nhật thông tin sản phẩm" : "Thêm sản phẩm mới"}
          </Typography>
          <form className="flex flex-col gap-4 mt-4" action={update?updateProduct:addProduct}>
            {update && <input type="hidden" name="id" value={updatingProduct._id} />}
            <TextField
              name="name"
              label="Tên sản phẩm"
              variant="standard"
              defaultValue={update ? updatingProduct.name : ""}
            />
            <TextField
              type="text"
              name="img"
              label="Hình ảnh"
              variant="standard"
              defaultValue={update ? updatingProduct.img : ""}
            />
            <TextField
              name="desc"
              label="Mô tả"
              variant="standard"
              defaultValue={update ? updatingProduct.desc : ""}
            ></TextField>
            <TextField
              type="select"
              name="type"
              label="Loại sản phẩm"
              variant="standard"
              defaultValue={update ? updatingProduct.type : ""}
            />
            <TextField
              name="price"
              label="Giá tiền"
              variant="standard"
              defaultValue={update ? updatingProduct.price : ""}
            />
            <TextField
              name="slug"
              label="Tên truy cập"
              variant="standard"
              defaultValue={update ? updatingProduct.slug : ""}
            />
            <Button variant="contained" type="submit" className="max-w-96 mt-4">
              Lưu
            </Button>
            <Button onClick={() => setOpen(false)}>Hủy bỏ</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default DataGridPanel;
