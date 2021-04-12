import { useState } from "react";
import Alert from './Alert';

export const Login = () =>{
    const [username,setUsername] = useState({username:null,password:null});
    const [processing ,setProcessing] = useState(false);
    const [alert, setAlert] = useState(null);
    const [loggedIn,setLoggedIn] = useState(false);

    const onSubmit = (e)=>{
        alert('Formulario foi enviado'+e);
    }

    const handleInputChanged = (e)=>{
        const field = e.target.name;
        const value = e.target.value;
        setUsername
    }

    return (
        <div>                
            <div className="container">
                <h2>Login</h2>
                
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Usuário</label>
                        <input 
                            type = "text"
                            className = "form-control"
                            //onChange = {this.handleInputChanged}
                            value=""
                            name = "username"
                            placeholder="Digite o usuário"/>

                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input 
                            type = "password"
                            className = "form-control"
                            onChange = ""
                            value=""
                            name = "password"
                            placeholder="Digite a senha"/>

                    </div>

                    <button type="submit"
                            className="btn btn-primary"
                            disabled=""
                            >Login
                    </button>

                    
                </form>
            </div>
        </div>
            
    );
}