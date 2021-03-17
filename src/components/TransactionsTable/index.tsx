import { Container } from './styles'
export function TransactionsTable() {
    return (

        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Development the Website</td>
                        <td className='deposit'>R$ 5000</td>
                        <td>Development</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Internet</td>
                        <td className='withdraw'>- R$ 500</td>
                        <td>Home</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}