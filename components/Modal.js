import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { GlobalContext } from "../src/context/GlobalState";
import { useContext } from "react";

export default function Modal() {
  const { toggleModal, modalContent } = useContext(GlobalContext);

  return (
    <div>
      <Dialog
        open="true"
        keepMounted
        onClose={() => toggleModal({})}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={{ background: "transparent" }}
      >
        <DialogTitle id="alert-dialog-slide-title">
          {modalContent.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {modalContent.overview}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => toggleModal({})} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
