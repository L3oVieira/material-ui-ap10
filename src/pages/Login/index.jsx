import React, {useState} from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Snackbar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import MuiAlert from '@mui/material/Alert';

// Pagina de Login dentro de um modal
// Prevenção de clicks fora da área do modal
// Login: Leonardo Senha: Vieira

const Login = ({handleClose}) => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarAlerta, setMostrarAlerta] = useState(false);

    const handleLogin = () => {
        if (login === 'Leonardo' && senha === 'Vieira') {
            console.log("Login efetuado com sucesso.")
            handleClose();  
        } else {
            console.log("Login ou senha incorretos.")
            setMostrarAlerta(true);
        }
      };

    const handleCloseAlert = () => {
        setMostrarAlerta(false);
    };
    
    return (
        <Grid container>
            <Card sx={style}>
                <Grid  item xs={12}>
                    
                    <InputLabel htmlFor="login_nome">Login</InputLabel>
                    <FormControl fullWidth>
                    <Input id="login_nome" aria-describedby="login_nome_helper_text" value={login} onChange={e => { setLogin(e.target.value) }} />
                    <FormHelperText id="login_nome_helper_text">Insira seu nome de usuário</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={12} style={{'marginTop': '30px'}} >
                    <InputLabel htmlFor="senha_nome">Senha</InputLabel>  
                    <FormControl fullWidth>
                    <Input id="login_senha" aria-describedby="login_senha_helper_text" value={senha} onChange={e => { setSenha(e.target.value) }} />
                    <FormHelperText id="login_senha_helper_text">Insira sua senha</FormHelperText>
                    </FormControl>
                </Grid>
                <Button color="primary" size="small" variant="contained" onClick={handleLogin} style={{'marginTop': '30px'}}>Entrar</Button>
            </Card>
            <Snackbar
                open={mostrarAlerta}
                autoHideDuration={6000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <MuiAlert
                onClose={handleCloseAlert}
                severity="error"
                sx={{ backgroundColor: '#FF3933', color: '#fff' }}
                // Mensagem de erro durante login
                >
                Não foi possível efetuar o login, os dados fornecidos podem estar incorretos. <br></br>
                Tente novamente!
                </MuiAlert>
            </Snackbar>
        </Grid>
        
    ); 
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '20%',
    bgcolor: 'background.paper',
    p: 4,
    padding: '50px',
};

export default Login;