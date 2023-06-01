export const server_calls = {
    get: async () => {
        const response = await fetch(`https://flask-digital-library.onrender.com/api/books`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer 89c3b174f58f7cc3ba00f6c7d1e8846e6df15537d2ffe327'
            },
        })

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    // TODO: Finish server calls
    create: async (data: any = {}) => {
        const response = await fetch(`https://flask-digital-library.onrender.com/api/books`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer 89c3b174f58f7cc3ba00f6c7d1e8846e6df15537d2ffe327'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://flask-digital-library.onrender.com/api/books/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Orgin': '*',
                'x-access-token': 'bearer 89c3b174f58f7cc3ba00f6c7d1e8846e6df15537d2ffe327'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://flask-digital-library.onrender.com/api/books/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'bearer 89c3b174f58f7cc3ba00f6c7d1e8846e6df15537d2ffe327'
            }
        })

        if (!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}