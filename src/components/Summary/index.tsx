import { useTransactions } from '../../hooks/useTransactions';

import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import totalImg from '../../assets/total.svg'

import { Container } from './styles';


export function Summary() {
    const { transactions } = useTransactions();

    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if (transaction.type === 'deposit') {
    //         return acc + transaction.amount;
    //     }

    //     return acc;
    // }, 0)

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;

        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;

    }, {
        deposits: 0,
        withdraws: 0,
        total: 0,
    })


    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="income" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="outcome" />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.withdraws)}
                </strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )

}