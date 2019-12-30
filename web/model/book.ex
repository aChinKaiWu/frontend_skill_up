use Croma

defmodule Tttgear.Model.Book do
  alias Croma.Result
  alias Antikythera.Context
  alias Tttgear.Request.Book.CreateRequest

  @collection_name "Book"

  defun create(context :: v[Context.t], req :: v[CreateRequest.t]) :: Result.t(map, String.t) do
    %{"group_id" => group_id, "app_id" => app_id, "root_key" => root_key} = Tttgear.get_all_env()
    req_body = %Dodai.CreateDedicatedDataEntityRequestBody{data: req}
    request = Dodai.CreateDedicatedDataEntityRequest.new(group_id, @collection_name, root_key, req_body)
    case Sazabi.G2gClient.send(context, app_id, request) do
      %Dodai.CreateDedicatedDataEntitySuccess{body: body} -> {:ok, body}
      _                                                   -> {:error, %{"error_message" => "database error"}}
    end
  end
end
