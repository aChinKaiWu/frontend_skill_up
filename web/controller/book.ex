use Croma

defmodule Tttgear.Controller.Book do
  use Antikythera.Controller

  alias Croma.Result
  alias Tttgear.Plug
  alias Tttgear.Request.Book.CreateRequest
  alias Tttgear.Model.Book
  alias Tttgear.Response.Book.CreateResponse

  plug Plug, :validate_content_type, [], [only: [:create]]

  defun create(%{context: context, request: %{body: body}} = conn :: v[Conn.t]) :: Conn.t do
    CreateRequest.new(body)
    |> Result.bind(&Book.create(context, &1))
    |> Result.map(&CreateResponse.generate/1)
    |> case do
      {:ok, resp}     -> Conn.json(conn, 201, resp)
      {:error, error} -> Conn.json(conn, 400, error)
    end
  end
end
