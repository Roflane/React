using Microsoft.AspNetCore.Mvc;
using PaginationBackend.Models;
using PaginationBackend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();

var app = builder.Build();

var dolls = new List<Doll>();
var dollGenerator = new DollGenerator();

for (int i = 0; i < 7310; i++) {
    dolls.Add(dollGenerator.Generate());
}


// /dolls/10/15
// /dolls?start=10&end=15

app.UseHttpsRedirection();

app.UseCors(x =>
{
    x.AllowAnyHeader()
        .AllowAnyMethod()
        .AllowAnyOrigin();
});

app.MapGet("/dolls", ([FromQuery] int start, [FromQuery] int count) => { return dolls.Skip(start).Take(count); });

app.Run();