use Croma

defmodule Tttgear.Response.Book do
  defmodule CreateResponse do
    use Croma.Struct, recursive_new?: true, fields: [
      id:     Croma.String,
      author: Croma.String,
      title:  Croma.String,
      number: Tttgear.Request.Book.Number,
    ]

    defun generate(%{"_id" => id, "data" => data} :: map) :: t do
      Map.put(data, "id", id)
      |> new!()
    end
  end
end
