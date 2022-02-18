import axios from 'axios';
import Dashboard from '../../components/dashboard';

const AdminDashboard = {
    async render() {
        
        return /* html */`
        ${Dashboard.render()}
        `;
    }
}

export default AdminDashboard;