class Api {
  constructor(options) {
    this.url = options.baseUrl;
    this.token = options.headers.authorization;
  }

  _handleFetch(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: {
        'authorization': this.token,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._handleFetch(res));

  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      method: 'GET',
      headers: {
        'authorization': this.token,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._handleFetch(res));
  }

  addNewCard(name, link) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: {
        'authorization': this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
      .then(res => this._handleFetch(res))
  }

  changeLikeCardStatus(elementID, isLiked) {
    if (isLiked) {
      return this.removeLike(elementID);
    } else {
      return this.addLike(elementID);
    }
  }

  removeLike(elementId) {
    return fetch(`${this.url}/cards/${elementId}/likes`, {
      method: 'DELETE',
      headers: {
        'authorization': this.token,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._handleFetch(res));
  }

  addLike(elementId) {
    return fetch(`${this.url}/cards/${elementId}/likes`, {
      method: 'PUT',
      headers: {
        'authorization': this.token,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._handleFetch(res));
  }


  deleteCard(elementId) {
    return fetch(`${this.url}/cards/${elementId}`, {
      method: 'DELETE',
      headers: {
        'authorization': this.token,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._handleFetch(res));
  }

  updateUserInfo(name, about) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: {
        'authorization': this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then(res => this._handleFetch(res));
  }

  updateAvatar(link) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'authorization': this.token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: link
      })
    })
      .then(res => this._handleFetch(res));
  }
}


const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-32',
  headers: {
    authorization: '78a9a2e8-0028-4357-9dc5-3dfee740ccb0'
  }
})

export {api};
