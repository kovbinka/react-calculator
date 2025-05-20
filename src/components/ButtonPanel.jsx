import './ButtonPanel.css'

function ButtonPanel({ onButtonClick }) {
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', 'C', '+',
        '='
    ];

    return (
        <div className="button-panel">
            {buttons.map((btn) => (
                <button key={btn} onClick={() => onButtonClick(btn)}>
                    {btn}
                </button>
            ))}
        </div>
    );
}

export default ButtonPanel;