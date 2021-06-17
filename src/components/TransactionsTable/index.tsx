import { useEffect } from "react";
import { Container } from "./styles";
import { api } from '../../services/api';

export function TransactionsTable() {
    useEffect(() => {
        api.get('/transactions').then(response => console.log(response.data));

    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>sdfsfsdf</td>
                        <td className="deposit">R$ 12000.00</td>
                        <td>Desenv</td>
                        <td>22/98/7898</td>
                    </tr>
                    <tr>
                        <td>sdfsfsdf</td>
                        <td className="withdraw">R$ 12000.00</td>
                        <td>Desenv</td>
                        <td>22/98/7898</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}