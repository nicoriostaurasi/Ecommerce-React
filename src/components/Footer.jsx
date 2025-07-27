import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer} id="contacto">
      <p>&copy; 2025 Mi Tienda. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#212529',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
    marginTop: 'auto',
  },
};

export default Footer;
