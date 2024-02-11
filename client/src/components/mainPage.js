import React, {useEffect} from 'react';
import axios from "axios";

const MainPage = () => {
    const secretKey = '0xzzCR3OSugE53hwYevnfSCVWoT6cZelACKF73lWvlXdKaieojkALiTyOiHn8e8D'
    const integrationID = 'cc4411e0-56e0-4b0f-a9b0-5d2d59081e58'

    const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZmNzM2ZTIyZDkxYjIxNjNjNDJlMDNkZDk5OTBkMWJlYTZlOGZmMWQ2NGE3MGU3ZjQ1MTMwYjFjZmUwZTY5YzRmZGJmYTRjNDU2M2Y3YjU0In0.eyJhdWQiOiJjYzQ0MTFlMC01NmUwLTRiMGYtYTliMC01ZDJkNTkwODFlNTgiLCJqdGkiOiI2ZjczNmUyMmQ5MWIyMTYzYzQyZTAzZGQ5OTkwZDFiZWE2ZThmZjFkNjRhNzBlN2Y0NTEzMGIxY2ZlMGU2OWM0ZmRiZmE0YzQ1NjNmN2I1NCIsImlhdCI6MTcwNzQzMTk1MiwibmJmIjoxNzA3NDMxOTUyLCJleHAiOjE3MDc1MTgzNTIsInN1YiI6IjEwNjQ3ODEwIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNTU1NTI2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiYTY5ZDA2MTQtZDY3Yi00YWEwLWEzN2YtZWQxMGRiZjI4NDAyIn0.d76UgHKVhZyP_6Vre6jMf6bE-fiukrcKPB2U6SUyxxX_FrF203T122J35bnOfkIaqE1ty0oMzDbIE1KqGrZTkB3WYKxDQnwLgzXuz8fWXEmzm_pV5ZUpfVN13B7S-5R9oTF0OiIStsZ5m3F_W5WA0cv60T4UHBCZCCRoVWOoW0wd6tRJCUhTfK3Nl-W5rFYlplveOy30W9cm0vA4mwjl1Zft9WE_fREgLTk89pgAAmv4XTqrmk1abg_aYR43hp_3TrVLG5BxM_kEgc6MJn3ZAZyfgfQkBBjAdaunMCBhwORfFOjtbeWJGDHQK_dK7IspEYwxNWq4zE9vZXf3h3wIpg'
    const refreshToken = 'def5020019fd1744863620f4ce2bb9b0b9146d82242fc312fabda067d6c349f074d538e88bf7c1d5fd309dc3a4cec7b792205b3d9624856a5a30e53bf445c6dcf202eea6425b94ce7b56be3ce46f0e16dc419d51c22b91f16a594fdefbf73f260f59f43fa7937db795b3f907b590cd46c5edb0c80550643c7f087fa2ad8e476262b27be88661464017ea783f74507c23241dd37c8fc78985267a7b0431a62f2b1b7b69eb5276be7d754c94c8e526395570082c4d14e92910383d8eb9982e34bf5022ce32afe74ea2df3dbe4e09225df5307ba0c96734e64e6037a640a7c40b3a1218fe70d4fbb3d7856ef28c8a59aa13ba195e640966223e93a8414b9a5206cb7c5674c910b22357fa79d639d0b112eaed4617e81b02c658394c9b0a9521e6c220eedd8e85d738684f7b547a44aa64b73badf0f37ed0f31aec653b2eee9f73d2686b5f7233999bb0e55d40816f3f8bf49f748be02542c432e90af87ab2ca579c253cc90ddca7e48f2aa782581de9f6a6de6849e13d8dd5cc27e885ed9029f4ed270450e0e9c46177d387eae5b1458ae64874182d5d93332ec907567b7682ce19643228a5d19b9900aae7159a7935fec850e65944bb8bfcd7a0e293bdd97c40574460dd0df6c93aac3585c2ba2c46f7cf79845cf98962d720845e243d633f98306aa3600d0f41a4e78715c7fec08d'

    const $host = axios.create({
        baseURL: 'https://localhost:5000'
    })

    useEffect(()=>{

        fetch('https://artemchernykh001.amocrm.ru/api/v4/leads?access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZmNzM2ZTIyZDkxYjIxNjNjNDJlMDNkZDk5OTBkMWJlYTZlOGZmMWQ2NGE3MGU3ZjQ1MTMwYjFjZmUwZTY5YzRmZGJmYTRjNDU2M2Y3YjU0In0.eyJhdWQiOiJjYzQ0MTFlMC01NmUwLTRiMGYtYTliMC01ZDJkNTkwODFlNTgiLCJqdGkiOiI2ZjczNmUyMmQ5MWIyMTYzYzQyZTAzZGQ5OTkwZDFiZWE2ZThmZjFkNjRhNzBlN2Y0NTEzMGIxY2ZlMGU2OWM0ZmRiZmE0YzQ1NjNmN2I1NCIsImlhdCI6MTcwNzQzMTk1MiwibmJmIjoxNzA3NDMxOTUyLCJleHAiOjE3MDc1MTgzNTIsInN1YiI6IjEwNjQ3ODEwIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNTU1NTI2LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiYTY5ZDA2MTQtZDY3Yi00YWEwLWEzN2YtZWQxMGRiZjI4NDAyIn0.d76UgHKVhZyP_6Vre6jMf6bE-fiukrcKPB2U6SUyxxX_FrF203T122J35bnOfkIaqE1ty0oMzDbIE1KqGrZTkB3WYKxDQnwLgzXuz8fWXEmzm_pV5ZUpfVN13B7S-5R9oTF0OiIStsZ5m3F_W5WA0cv60T4UHBCZCCRoVWOoW0wd6tRJCUhTfK3Nl-W5rFYlplveOy30W9cm0vA4mwjl1Zft9WE_fREgLTk89pgAAmv4XTqrmk1abg_aYR43hp_3TrVLG5BxM_kEgc6MJn3ZAZyfgfQkBBjAdaunMCBhwORfFOjtbeWJGDHQK_dK7IspEYwxNWq4zE9vZXf3h3wIpg', {
            // headers: {
            //     'Authorization': 'OAuth y0_AgAAAAAhJA1SAApFDgAAAADpIrtscLwwRUU2Sp-eWYC0geRQ3gMeppI'
            // }
        }).then(
            response => {
                response.json().then(result => {
                    console.log(result)
                    // setFilesOnDisk(result._embedded.items)
                })

            }
        )

        // $host.get('/').then(result =>
        //     console.log(result)
        // )
        // let response = axios({
        //     url: 'https://artemchernykh001.amocrm.ru/api/v4/leads?access_token=' + accessToken,
        //     method: "GET",
        //     // headers: {
        //     //     'Access-Control-Allow-Origin' : '*',
        //     //     "Access-Control-Allow-Methods" : "DELETE, POST, GET, OPTIONS",
        //     //     "Access-Control-Allow-Headers" : "Content-Type, Authorization, X-Requested-With"
        //     // }
        // }).then(response => {
        //     console.log(response)
        // })
        // // console.log(response)

    }, [])

    return (
        <div>
            main
        </div>
    );
};

export default MainPage;