var updateButtons = document.getElementsByClassName("update-cart")


for (var i = 0; i < updateButtons.length; i++) {
    updateButtons[i].addEventListener('click', function() {
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId', productId, 'actions', action)

        console.log('USER:', user)
        if (user == 'AnonymousUser') {
            addCookie(productId, action)
        } else {
            updateUserOrder(productId, action)
        }

    })
}

function addCookie(productId, action) {
    console.log('Not authenticated')

    if (action == 'add') {

        if (cart[productId] == undefined) {
            cart[productId] = { 'quantity': 1 }

        } else {

            cart[productId]['quantity'] += 1
        }
    }

    if (action == 'remove') {
        cart[productId]['quantity'] -= 1

        if (cart[productId]['quantity'] <= 0) {
            console.log('Remove Item')
            delete cart[productId]
        }
    }
    document.cookie = 'cart=' + JSON.stringify(cart) + ";domain=;path=/"
    location.reload()

}


function updateUserOrder(productId, action) {
    console.log('User is authenticated....Updating...')


    var url = '/update_item/';


    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'json',
            'X-CSRFToken': csrftoken,

        },
        body: JSON.stringify({ 'productId': productId, 'action': action })

    })


    .then((response) => {
        return response.json()
    })

    .then((data) => {
        console.log('data:', data)
        location.reload()
    })


}