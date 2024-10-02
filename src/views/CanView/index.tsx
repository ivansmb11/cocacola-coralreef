import { useEffect, useState } from "react";
import {
  Amount,
  Button,
  ButtonContainer,
  Container,
  Content,
  Header,
  LoadingText,
  Logos,
  MainContent,
  Subtitle,
  Subtitle2,
  TextContainer,
  Title,
} from "./styles";
import {
  TextField,
  Grid,
  CircularProgress,
  Modal,
  Box,
  Typography,
  Button as MUIButton,
} from "@mui/material";
import Coral from "../../assets/coral.png";
import CocaCola from "../../assets/cola.png";

export const CanView = () => {
  const [canCount, setCanCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const storedCanCount = localStorage.getItem("canCount");

    if (storedCanCount) {
      const newCanCount = parseInt(storedCanCount, 10) + 1;
      setCanCount(newCanCount);
      localStorage.setItem("canCount", newCanCount.toString());
    } else {
      localStorage.setItem("canCount", "1");
      setCanCount(1);
    }
    setIsLoading(false);
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setErrorMessage("");

    if (parseInt(age, 10) < 18) {
      handleOpen();
      setErrorMessage(
        "Debes tener al menos 18 años para enviar el formulario."
      );
      return;
    }
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);

      console.log("Form Data:", { fullName, phoneNumber, email, age });

      setFullName("");
      setPhoneNumber("");
      setEmail("");
      setAge("");
    }, 2000);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    maxWidth: "400px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    "@media (max-width: 600px)": {
      p: 2,
    },
  };

  return (
    <Container>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ups, algo salió mal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {errorMessage}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <MUIButton onClick={handleClose}>Cerrar</MUIButton>
          </Box>
        </Box>
      </Modal>
      <Content>
        <Header>
          <Logos>
            <img
              src={Coral}
              style={{ height: "40px", marginRight: "20px" }}
            ></img>
            <h3>X</h3>
            <img
              src={CocaCola}
              style={{ height: "40px", marginLeft: "20px" }}
            ></img>
          </Logos>
          <Title>Lata #{canCount}</Title>
          <Subtitle>CANTIDAD DE DINERO RECAUDADO</Subtitle>
          <Amount>
            {(canCount * 3).toLocaleString("es-MX", {
              style: "currency",
              currency: "MXN",
            })}
          </Amount>
        </Header>
        <MainContent>
          {isLoading ? (
            <>
              <CircularProgress />
              <LoadingText>Cargando...</LoadingText>
            </>
          ) : formSubmitted ? (
            <LoadingText>
              Tu registro ha sido exitoso. Gracias por participar!
            </LoadingText>
          ) : (
            <>
              <TextContainer>
                <Subtitle2>
                  Completa el siguiente formulario para participar en una rifa
                  de un viaje a Cancún:
                </Subtitle2>
              </TextContainer>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      variant="outlined"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Age"
                      variant="outlined"
                      type="number"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <ButtonContainer>
                      <Button type="submit">
                        Registrar
                      </Button>
                    </ButtonContainer>
                  </Grid>
                </Grid>
              </form>
            </>
          )}
        </MainContent>
      </Content>
    </Container>
  );
};
