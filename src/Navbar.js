const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Administracion</h1>
            <div className="links">
                <a href="/">Inicio</a>
                <a href="/register">Registrar</a>
                <a href="/modify">Modificar</a>
                <a href="/disable">Deshabilitar</a>
                <a href="/delete" hidden>Eliminar</a>
            </div>
        </nav>
    )
}

export default Navbar;