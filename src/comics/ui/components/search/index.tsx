import './search.css'

interface SearchProps {
  hanldeSearch: (value: string) => void
}

export function Search({ hanldeSearch }: SearchProps) {
  return (
    <header className="search">
      <label htmlFor="search">Introduce el nombre</label>
      <input
        id="search"
        name="search"
        placeholder="Buscar comic..."
        onChange={({ target: { value } }) => hanldeSearch(value)}
      />
    </header>
  )
}
