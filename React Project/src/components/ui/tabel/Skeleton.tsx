export default function TableRowSkeleton({ rows, cols }: Readonly<{ rows: number, cols: number }>) {

    // map loop
    // [...Array(rows)]> [undefined, undefined,]




    return (
        <>

            {
                [...Array(rows)].map((_, i: number) => {
                    return (


                        <tr key={i} className="hover:bg-gray-50">
                            {
                                [...Array(cols)].map((_, j: number) => {
                                    return (


                                        <td className="px-6 py-4 font-semibold">
                                            Electronics
                                        </td>
                                    )
                                })
                            }


                        </tr>
                    );

                })
            }

        </>
    )
}