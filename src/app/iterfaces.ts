export interface IWeather {
  query: {
    results: {
      channel: {
        location: {
          city: string,
          country: string,
          region: string
        },
        item: {
          code: string,
          high: string,
          low: string
        }
      }
    }
  }
}

export interface ICidades {
  nome: string
  id: string,
  estado: string
}
