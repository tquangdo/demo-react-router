export var API_URL = (process.env.NODE_ENV === 'production') ? `https://${process.env.REACT_APP_DOMAINNAME}:${process.env.PORT}` : 'http://localhost:3000'
