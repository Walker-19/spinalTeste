class ApiService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async fetchData (endpoint){
        const url = `${this.baseUrl}${endpoint}`;

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.ok) {
                const data = await response.json();
                return data;
            }
            else {
                throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
            }
        } catch (error) {
            throw new Error (`HTTP error: ${error}`)
        }
    }

    async RoomList(idFloor) {
        const url = `${this.baseUrl}floor/${idFloor}/room_list`;
          try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const data = await response.json();
                return data;
            }
              else {
            throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
        }
        } catch (error) {
            throw new Error(`HTTP error ${url}:${error}`)
        }

    }


    async statusRoom(idRoom) {
        const url = `${this.baseUrl}room/${idRoom}/control_endpoint_list`;
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                const data = await response.json();
                return data;
            }
            else {
                throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
            }
        } catch (error) {
            throw new Error(`HTTP error:${error}`)
        }
    }



}


export default new ApiService('https://api-developers.spinalcom.com/api/v1/')