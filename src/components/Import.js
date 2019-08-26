import React from 'react'
import {
    Button, Table, TableHead,
    TableBody, TableRow, TableCell, Container,
    Menu, MenuItem
} from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'

const Import = (props) => {
    // fill out this component
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [idx, setIdx] = React.useState(null);

    const handleClick = (event, idx) => {
      setAnchorEl(event.currentTarget);
      setIdx(idx);
    }
  
    const handleClose = () => {
      setAnchorEl(null);
      setIdx(null);
    }

    const deleteItem = () => {
        props.deleteMake(idx);
        handleClose();
    }

    return (
        <Container maxWidth="md" style={{ margin: '50px auto' }}>
            <Button
                onClick={props.fetchMakes}
                variant="contained"
                color="primary">
                    Import
                </Button>
                <h2>COUNT: {props.makes.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, idx) => {
                        return (
                            <TableRow>
                                <TableCell>{make.MakeId}</TableCell>
                                <TableCell>{make.MakeName}</TableCell>
                                <TableCell>
                                    <MoreVert
                                        onClick={(e) => handleClick(e, idx)}
                                    ></MoreVert>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={deleteItem}>Delete</MenuItem>
            </Menu>
        </Container>
    )
}

export default Import