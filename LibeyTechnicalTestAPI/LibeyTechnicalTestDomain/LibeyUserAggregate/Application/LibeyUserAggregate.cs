using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.DTO;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Application.Interfaces;
using LibeyTechnicalTestDomain.LibeyUserAggregate.Domain;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace LibeyTechnicalTestDomain.LibeyUserAggregate.Application
{
    public class LibeyUserAggregate : ILibeyUserAggregate
    {
        private readonly ILibeyUserRepository _repository;
        public LibeyUserAggregate(ILibeyUserRepository repository)
        {
            _repository = repository;
        }
        public void Create(UserUpdateorCreateCommand command)
        {
            var user = new LibeyUser(
                command.DocumentNumber,
                command.DocumentTypeId,
                command.Name,
                command.FathersLastName,
                command.MothersLastName,
                command.Address,
                command.UbigeoCode,
                command.Phone,
                command.Email,
                command.Password
            );
            _repository.Create(user);
        }
        public void Update(UserUpdateorCreateCommand command)
        {
            var existingUser = _repository.FindExists(command.DocumentNumber);

            if (existingUser == null)
                throw new Exception("Usuario no encontrado");

            _repository.Update(existingUser,command);

        }

        public void Delete(string documentNumber)
        {
            var existingUser = _repository.FindExists(documentNumber);

            if (existingUser == null)
                throw new Exception("Usuario no encontrado para eliminar");

            _repository.Delete(existingUser, documentNumber);

        }

        public LibeyUserResponse FindResponse(string documentNumber)
        {
            var row = _repository.FindResponse(documentNumber);
            return row;
        }

        public List<LibeyUser> GetUsers()
        {
            var listUsers = _repository.GetUsers();
            return listUsers;
        }

    }
}