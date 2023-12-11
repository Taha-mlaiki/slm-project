import React from 'react'

const Forms = ({submit,setFormData,formData}) => {

    function hundelChange(e){
        const {name,value} = e.target;
        setFormData((prev)=> ({
            ...prev,
            [name]:value
        }))
    }

return (
        <form className=''onSubmit={submit}>
            <div className="row mb-3">
                <div className="input col-sm-6">
                    <label className='w-100' htmlFor="name">Nom <br />
                        <input value={formData.firstName} name='firstName' onChange={(e)=> hundelChange(e)} type="text" />
                    </label>
                    
                </div>
                <div className="input col-sm-6 ms-auto">
                    <label className='w-100' htmlFor="Prenom">Prenom <br />
                        <input value={formData.lastName} name='lastName' onChange={(e)=> hundelChange(e)} type="text" />
                    </label>
                    
                </div>
            </div>
            <div className="row mb-3">
                <div className="input col-sm-6">
                    <label className='w-100' htmlFor="Date">Date de Naissance <br />
                        <input type="date" />
                    </label>
                    
                </div>
                <div className="input col-sm-6 ms-auto">
                    <label className='w-100' htmlFor="Lieu">Lieu de Naissance <br />
                        <input type="text" />
                    </label>
                    
                </div>
            </div>
            <div className="row mb-3">
                <div className="input col-sm-6">
                    <label className='w-100' htmlFor="Adresse">Adresse <br />
                        <input type="text" />
                    </label>
                    
                </div>
                <div className="input col-sm-6 ms-auto">
                    <label className='w-100' htmlFor="Telephone">Telephone <br />
                        <input type="tele" />
                    </label>
                    
                </div>
            </div>
            <div className="row mb-1">
                <div className="input col-sm-6">
                    <label className='w-100' htmlFor="Email">Email <br />
                        <input type="email" />
                    </label>
                    
                </div>
                <div className="input col-sm-6 ms-auto">
                    <label className='w-100' htmlFor="Telephone">Genre <br />
                        <select defaultValue={"homme"} name="genre" id="">Genre
                            <option value="homme">Homme</option>
                            <option value="homme">Femme</option>
                        </select>
                    </label>
                    
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-12">
                <label className='w-100 input mb-2' htmlFor="cin"> <br />
                        <input placeholder='CIN' type="email" />
                    </label>
                </div>
                <div className="col-12">
                <label className='w-100' htmlFor="cin"> <br />
                        <select name="" id="">
                            <option >--choisir filier--</option>
                            <option value="filier 1">filier 1</option>
                            <option value="filier 2">filier 2</option>
                            <option value="filier 3">filier 3</option>
                        </select>
                    </label>
                </div>
            </div>
            <button>Creer un compte</button>
            <p className='ps-2 m-0 mt-1 text-start'>Vous avez deja un compte <span>Se connecter</span></p>
        </form>
        )
    }
    
    export default Forms
    