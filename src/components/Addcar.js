import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function Addcar({addCar}) {
    const [open, setOpen] = useState(false);
    const [car, setCar] = useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        year: '',
        price: ''
    });

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleSave = () => {
        addCar(car);
        setOpen(false);
    }

    const inputChanged = (event) => {
        setCar({
            ...car,
            [event.target.name]: event.target.value
        });
    }
  
    return (
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Car
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>New Car</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              name="brand"
              value={car.brand}
              onChange={inputChanged}
              label="Brand"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              name="model"
              value={car.model}
              onChange={inputChanged}
              label="Model"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              name="color"
              value={car.color}
              onChange={inputChanged}
              label="Color"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              name="fuel"
              value={car.fuel}
              onChange={inputChanged}
              label="Fuel"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              name="year"
              value={car.year}
              onChange={inputChanged}
              label="Year"
              fullWidth
              variant="standard"
            />
            <TextField
              margin="dense"
              name="price"
              value={car.price}
              onChange={inputChanged}
              label="Price"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
}

export default Addcar;