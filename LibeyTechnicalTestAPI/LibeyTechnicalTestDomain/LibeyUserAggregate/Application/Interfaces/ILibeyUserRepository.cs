﻿using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Domain;

namespace LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces
{
    public interface ILibeyUserRepository
    {
        LibeyUserResponse FindResponse(string documentNumber);
        void Create(LibeyUser libeyUser);
        void Update(LibeyUser existingUser, UserUpdateorCreateCommand command);
        LibeyUser FindExists(string documentNumber);
        void Delete(LibeyUser libeyUser, string documentNumber);
        List<LibeyUser> GetUsers();
    }
}
