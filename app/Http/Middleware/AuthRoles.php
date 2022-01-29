<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class AuthRoles
{
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
	 * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
	 */
	public function handle(Request $request, Closure $next, $role = '')
	{
		$roles = array_filter(explode('|', trim($role)));

		if (! empty($roles)) {
			if (Auth::check()) {
				$user = Auth::user();
				if (!in_array($user->role, $roles)) {
					throw new Exception("Unauthorized.", 401);
				}
			} else {
				throw new Exception("Unauthenticated.", 401);
			}
		}

		return $next($request);
	}
}
