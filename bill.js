function calculateTotal() {
    const checkboxes = document.querySelectorAll('input[name="item"]:checked');
    let total = 0;
    
    checkboxes.forEach((checkbox) => {
        total += parseFloat(checkbox.value);
    });

    document.getElementById('total').value = total.toFixed(2);
}