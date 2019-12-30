use Croma

defmodule Tttgear.Plug do
  alias Antikythera.Conn

  @json_content_type "application/json"

  defun validate_content_type(%{request: %{headers: headers}} = conn :: v[Conn.t], _opts :: any) :: Conn.t do
    case headers["content-type"] do
      @json_content_type -> conn
      _                  -> Conn.json(conn, 400, %{"error_message" => "content type error"})
    end
  end
end
